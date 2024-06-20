export async function handleGetData(post: any) {
  try {
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
      credentials: "include",
    });

    if (response.ok) {
      window.location.href = "/Wall";
    } else {
      throw new Error("Failed to create resource");
    }
  } catch (error) {
    alert(error);
  }
}
