# First things first

Pull requests are welcome. However, if you have an idea how to improve the project (fix a bug, implement a new feature etc.), create an issue first so that we can discuss it.

This project is aimed to remain backwards compatible. This means that **changes should not change or break the existing public API of the library**. All current automatic tests should pass and the example components should work the same way after making changes. Also, it's good to keep in mind that the promise of this project is to keep the core API small and simple. And fast.

# Run tests

```bash
lein test
```

# Compile examples project

```bash
cd examples/reagent # or any other module
npm install
shadow-cljs watch frontend
```

Now go to http://localhost:8000/index.html

# Update API DOC

```bash
lein codox
```
