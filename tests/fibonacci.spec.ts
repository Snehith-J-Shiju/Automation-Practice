let [a, b] = [0, 1];
for (let i=0; i<10; i++){
    console.log(a);
    [a, b] = [b, a+b];
}
