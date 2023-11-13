import axios from 'axios';

export async function getTestCases() {

    try {

        // Requête Axios pour remplacer le deuxième appel AJAX
        const res = await axios.get('http://localhost:3001/testCases');
        const data = res.data;

        return (data)
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}
