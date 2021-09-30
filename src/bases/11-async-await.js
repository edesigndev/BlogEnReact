const getImagen = async () => {
  try {
    const apiKey = "ZwYUI6DOh8JWemroSVTAvEJdqi6Ete7t";
    const peticion = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await peticion.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
