if [ -d $1 ]; then
  echo 'error: dir exists'
  exit
else
  mkdir $1
  cd $1
  mkdir css js
  echo -e "<!DOCTYPE>" > index.html
  echo -e "<title>Hello</title>" >> index.html
  echo -e "<h1>Hi</h1>" >> index.html
  echo -e "h1{color: red;}" > css/style.css
  echo -e 'var string = "Hello World"' > js/main.js
  echo -e "alert(string)" >> js/main.js
  echo 'success'
  exit
fi