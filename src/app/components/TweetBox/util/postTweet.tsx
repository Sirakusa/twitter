export const handleGetData = async (post: any) => {
  try {
    const response = await fetch("http://localhost:5000/tweet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post), // Aquí puedes colocar el JSON que deseas enviar
    });

    if (response.status !== 201) {
      throw new Error("Failed to create resource");
    }

    // Hacer algo después de recibir un código de estado 201
  } catch (error) {
    console.error("Error:", error);
  }
};
