import axios from "axios";
axios.get("https://example.com/data")
    .then(res => {
    console.log(res.data);
});
const fetchData = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        console.log("todo", response.data);
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("axios Error", error.message);
            if (error.response) {
                console.log(error.response.status);
            }
        }
    }
};
//# sourceMappingURL=webReq.js.map