import React, {useEffect} from "react";
import api from "./api";

function Analytics() {
        useEffect(() => {
        api.get('/analytics')
        .then(response => {
            console.log('Ура Алиш лох:', response.data);})

            .catch(error => {
                console.error('Ошибка Алиш,все хуйня', error);
        });
    }, []);
        
return (<div>О,работает</div>
);
}

export default Analytics;