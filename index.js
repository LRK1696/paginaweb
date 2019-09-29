console.log('hola')
const carrousel=document.getElementById('carrousel')
const getPosts = () => {              
                   fetch('https://api.myjson.com/bins/tsi5d',{method:'GET'})
                                    .then(res => res.json())
                                    .then(posts => {
                                                const arr = posts.data;
                                                let template = ' '
                                                arr.forEach(ele =>{console.log(ele)
                                                              
                                                            const card = `
                                                        
                                                            <div class="card d-block m-auto" style="width: 18rem;">
                                                            <img src="${ele.url}" class="card-img-top" alt="url"> 
                                                            <div class="card-body">
                                                                        <p class="card-text">${ele.title}</p><p>${ele.subtitle}</p>
                                                            </div>
                                                </div>
                                                
                                                            `;
                                                            template +=card
                                                           

                                                })
                                                carrousel.innerHTML=template
                                               
                                    })
                        }

                        getPosts()
              