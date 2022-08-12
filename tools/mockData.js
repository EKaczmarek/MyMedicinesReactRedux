const medicines = [
  {
    id: 1,
    title: "Rutinoscorbin",
    slug: "rutinoscorbin",
    categoryId: 1
  },
  {
    id: 2,
    title: "Fervex",
    slug: "fervex",
    categoryId: 1
  },
  {
    id: 3,
    title: "Aqua-gel",
    slug: "aqua-gel",
    categoryId: 2
  },
  {
    id: 4,
    title: "Apap",
    slug: "apap",
    categoryId: 3
  }
];

const categories = [
  { id: 1, name: "Flu" },
  { id: 2, name: "Burn" },
  { id: 3, name: "Aches" }
];

const newCourse = {
  id: null,
  title: "",
  categoryId: null
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  medicines,
  categories
};
