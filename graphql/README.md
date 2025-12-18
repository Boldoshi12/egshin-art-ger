# GraphQL Setup Guide

Энэхүү GraphQL бүтэц нь таны Nuxt 3 project-д Apollo Client ашиглан backend-тай холбогдох боломжийг олгоно.

## 📁 Folder Structure

```
graphql/
├── client.js              # Apollo Client тохиргоо
├── queries/               # GraphQL queries
│   ├── exhibitions.js     # Үзэсгэлэнгийн queries
│   ├── programs.js        # Хөтөлбөрийн queries
│   └── projects.js        # Төслүүдийн queries
└── mutations/             # GraphQL mutations
    └── createContact.js   # Холбоо барих mutation

plugins/
└── graphql.js             # Apollo Client plugin

composables/
└── useGraphQL.js          # GraphQL composables
```

## ⚙️ Configuration

### 1. GraphQL Endpoint тохируулах

`.env` файлдаа GraphQL endpoint-аа оруулна уу:

```bash
NUXT_PUBLIC_GRAPHQL_ENDPOINT=http://127.0.0.1:8080/graphql
```

Эсвэл production-д:

```bash
NUXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-backend.com/graphql
```

## 🚀 Хэрэглэх заавар

### Query ажиллуулах

#### Жишээ 1: Үзэсгэлэнгүүдийг авах

```vue
<script setup>
import { GET_EXHIBITIONS } from "~/graphql/queries/exhibitions";

// Composable ашиглан query хийх
const { data, loading, error, refetch } = useGraphQLQuery(GET_EXHIBITIONS);

// Exhibitions-ийг computed-оор авах
const exhibitions = computed(() => data.value?.exhibitions || []);
</script>

<template>
  <div>
    <!-- Loading байдал -->
    <div v-if="loading" class="text-center p-8">
      <p>Ачааллаж байна...</p>
    </div>

    <!-- Алдаа гарсан үед -->
    <div v-else-if="error" class="text-red-600 p-8">
      <p>Алдаа: {{ error.message }}</p>
      <button
        @click="refetch"
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Дахин оролдох
      </button>
    </div>

    <!-- Мэдээлэл харуулах -->
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="exhibition in exhibitions"
        :key="exhibition.id"
        class="border rounded-lg p-4"
      >
        <h3 class="text-xl font-bold">{{ exhibition.title }}</h3>
        <p class="mt-2">{{ exhibition.description }}</p>
        <p class="mt-2 text-sm text-gray-600">
          {{ exhibition.startDate }} - {{ exhibition.endDate }}
        </p>
      </div>
    </div>
  </div>
</template>
```

#### Жишээ 2: ID-ээр нэг төсөл авах

```vue
<script setup>
import { GET_PROJECT_BY_ID } from "~/graphql/queries/projects";

const route = useRoute();
const projectId = route.params.id;

const { data, loading, error } = useGraphQLQuery(GET_PROJECT_BY_ID, {
  id: projectId,
});

const project = computed(() => data.value?.project);
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else-if="project">
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>
```

### Mutation ажиллуулах

#### Жишээ: Холбоо барих форм

```vue
<script setup>
import { CREATE_CONTACT } from "~/graphql/mutations/createContact";

const { mutate, loading, error } = useGraphQLMutation(CREATE_CONTACT);

const formData = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const successMessage = ref("");

const handleSubmit = async () => {
  try {
    const result = await mutate({ input: formData.value });

    if (result?.createContact.success) {
      successMessage.value = result.createContact.message;
      // Формыг цэвэрлэх
      formData.value = { name: "", email: "", phone: "", message: "" };
    }
  } catch (err) {
    console.error("Error submitting contact form:", err);
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-md mx-auto p-6">
    <div class="mb-4">
      <label class="block mb-2">Нэр</label>
      <input
        v-model="formData.name"
        type="text"
        required
        class="w-full px-4 py-2 border rounded"
      />
    </div>

    <div class="mb-4">
      <label class="block mb-2">И-мэйл</label>
      <input
        v-model="formData.email"
        type="email"
        required
        class="w-full px-4 py-2 border rounded"
      />
    </div>

    <div class="mb-4">
      <label class="block mb-2">Утас</label>
      <input
        v-model="formData.phone"
        type="tel"
        class="w-full px-4 py-2 border rounded"
      />
    </div>

    <div class="mb-4">
      <label class="block mb-2">Мессеж</label>
      <textarea
        v-model="formData.message"
        required
        rows="5"
        class="w-full px-4 py-2 border rounded"
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="loading"
      class="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
    >
      {{ loading ? "Илгээж байна..." : "Илгээх" }}
    </button>

    <div v-if="error" class="mt-4 p-4 bg-red-100 text-red-700 rounded">
      Алдаа: {{ error.message }}
    </div>

    <div
      v-if="successMessage"
      class="mt-4 p-4 bg-green-100 text-green-700 rounded"
    >
      {{ successMessage }}
    </div>
  </form>
</template>
```

## 🔧 Backend-тай холбох

Таны backend GraphQL schema нь дараах бүтэцтэй байх ёстой:

### Queries

```graphql
type Query {
  exhibitions: [Exhibition!]!
  exhibition(id: ID!): Exhibition
  programs: [Program!]!
  program(id: ID!): Program
  projects: [Project!]!
  project(id: ID!): Project
  projectsByCategory(category: String!): [Project!]!
}
```

### Mutations

```graphql
type Mutation {
  createContact(input: ContactInput!): ContactResponse!
}

input ContactInput {
  name: String!
  email: String!
  phone: String
  message: String!
}

type ContactResponse {
  success: Boolean!
  message: String!
}
```

### Types

```graphql
type Exhibition {
  id: ID!
  title: String!
  description: String!
  startDate: String!
  endDate: String!
  images: [String!]!
  artist: String
  location: String
}

type Program {
  id: ID!
  title: String!
  description: String!
  date: String!
  duration: String
  capacity: Int
  images: [String!]!
}

type Project {
  id: ID!
  title: String!
  description: String!
  category: String!
  images: [String!]!
  completedDate: String
}
```

## 📝 Шинэ Query эсвэл Mutation нэмэх

### Query нэмэх:

1. `/graphql/queries/` folder-д шинэ файл үүсгэх
2. `gql` ашиглан query бичих:

```javascript
import { gql } from "@apollo/client/core";

export const GET_YOUR_DATA = gql`
  query GetYourData {
    yourData {
      id
      name
    }
  }
`;
```

### Mutation нэмэх:

1. `/graphql/mutations/` folder-д шинэ файл үүсгэх
2. `gql` ашиглан mutation бичих:

```javascript
import { gql } from "@apollo/client/core";

export const YOUR_MUTATION = gql`
  mutation YourMutation($input: YourInput!) {
    yourMutation(input: $input) {
      success
      message
    }
  }
`;
```

## 🐛 Troubleshooting

### CORS алдаа

Хэрэв CORS алдаа гарвал backend дээрээ CORS тохируулна уу.

### Network алдаа

GraphQL endpoint зөв байгаа эсэхийг шалгана уу:

```bash
echo $NUXT_PUBLIC_GRAPHQL_ENDPOINT
```

### Import алдаа

Query/Mutation зөв import хийсэн эсэхийг шалгана уу:

```javascript
import { GET_EXHIBITIONS } from "~/graphql/queries/exhibitions";
```

---

## 📚 Нэмэлт мэдээлэл

- [Apollo Client Docs](https://www.apollographql.com/docs/react/)
- [GraphQL Docs](https://graphql.org/learn/)
- [Nuxt 3 Docs](https://nuxt.com/docs)
