java -jar /usr/local/lib/antlr-4.8-complete.jar tofu.g4
javac -classpath /usr/local/lib/antlr-4.8-complete.jar *.java
echo "Starting TestRig:"
java -cp ".:/usr/local/lib/antlr-4.8-complete.jar" org.antlr.v4.runtime.misc.TestRig tofu program -gui