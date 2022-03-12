//CREATE

axios.post('/login', {
    userName: 'sdwyatt',
    firstName: 'Stacie',
    lastName: 'Wyatt',
    })
.then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
 
//READ

axios.get("/userName", {
    params: {
        firstname: "Stacie"
    }
});

//UPDATE

axios.put(
    '/gaming.amazon.com/home'), {
    title: title, 
    description: description, 
    published: true, 
});

//DELETE

axios.delete('/gaming.amazon.com/home');

    