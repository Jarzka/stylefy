# Run tests

```bash
lein test
```

# Compile examples project

Start ClojureScript -> JS autocompile:

```bash
cd examples/src
lein figwheel
```

Start web server:

```bash
cd examples/resources/public
python -m SimpleHTTPServer 8000
```

Now point your browser to http://localhost:8000/index_dev.html

# Update API DOC

```bash
lein codox
```