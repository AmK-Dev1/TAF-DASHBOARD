import axios from 'axios';

export async function getProjects() {

    try {


        // Requête Axios pour remplacer le deuxième appel AJAX
        const res = await axios.get('http://localhost:3001/projects');
        const data = res.data;

        /* [{
            "id": 1,
            "key": "BOOK",
            "name": "Book Store",
            "description": "Book Store Web App",
            "url": "https://www.getxray.app/",
            "state": "createPending",
            "visibility": "public",
            "group_id": 1,
            "version": "0.1",
            "revision": "1.0",
            "environment": "Windows 10 Pro",
            "status": "Pending"
          }, */

        return (data)
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}
