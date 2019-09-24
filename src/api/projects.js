import axios from 'axios';

const getProjects = async () => {
  try {
    const response = await axios.get(
      'https://nazarovgeorge.github.io/ts-contest-api/db.json',
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default getProjects;
