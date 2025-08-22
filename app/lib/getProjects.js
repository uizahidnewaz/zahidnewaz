const getProjects = async () => {
  let response = await fetch(
    "https://zahidnewazbackend.onrender.com/api/projects"
  );
  let data = await response.json();
  return data;
};

export default getProjects;
