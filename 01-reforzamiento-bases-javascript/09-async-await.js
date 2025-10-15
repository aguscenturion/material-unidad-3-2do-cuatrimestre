const getCharacterById = async () => {
  try {
    const url = "https://thesimpsonsapi.com/api/characters/5";
    const urlImage = "https://cdn.thesimpsonsapi.com/500";

    const response = await fetch(url);
    const data = await response.json();

    // const { portrait_path } = data;

    // const divImage = document.getElementById("container");
    // const img = document.createElement("img");
    // img.src = `${urlImage}${portrait_path}`;

    // divImage.append(img);
  } catch (error) {
    console.log(error);
    alert("Ocurrio un error inesperado");
  }
};

getCharacterById();

// TODO: desestructurar la informacion de data hasta tener la variable image solamente
