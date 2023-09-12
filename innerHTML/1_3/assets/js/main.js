const galleryContainer = document.querySelector("#gallery");

galleryContainer.innerHTML = `
<figure><img src='https://picsum.photos/id/1/300/300' alt='pic1'>Fig 1</figure>
<figure><img src='https://picsum.photos/id/1/300/300' alt='pic1'>Fig 2</figure>
<figure><img src='https://picsum.photos/id/1/300/300' alt='pic1'>Fig 3</figure>
`;
galleryContainer.style.display = "flex";
/*(let gallery = document.getElementById("gallery");
gallery.innerHTML =
  "<figure><img src='https://picsum.photos/id/1/300/300'/><p>Fig.1</p></figure><figure><img src='https://picsum.photos/id/1/300/300'/><p>Fig.2</p></figure><figure><img src='https://picsum.photos/id/1/300/300'/><p>Fig.3</p></figure>";*/
