const BASE_URL = "https://studyb.azurewebsites.net/api";

export const api = async (url, method, body = null, headers = {}) => {
    try{
        const endPoint = BASE_URL.concat(url);
        const reqBody = body ? JSON.stringify(body) : null;
        
        const fetchParams = {method, headers};

        if((method === "POST" || method === "PUT") && !reqBody){
            throw new Error("Request body required");

        }
        if(method === "GET"){
            
        }

        if(reqBody){
            fetchParams.headers["Content-type"] = "application/json";
            fetchParams.body = fetchParams;
        }

        const fetchPromise = fetch(endPoint, fetchParams);
        const timeOutPromise = new Promise((resolve, reject) =>{
            setTimeout(() => {
                reject("Request Timeout");
            }, 10000);

        });
        const response = Promise.race([fetchPromise, timeOutPromise]);
        return response;
    }
    catch(e){
        throw new Error(e);
    }
}

export const fetchApi = async (url,method, body, statusCode, headers, id = null, loader = false) => {
    try{
        const headers = {}
        const result = {
            id: null,
            success: false,
            responseBody: null
        };
        if(id){
            headers["x-auth"] = id;
        }
        const response = await api(url, method, body, headers);

        console.log(response);

        if(response.status === statusCode){
            result.success = true;
            
            if(response.headers.get("x-auth")){
                result.id = response.headers.get("x-auth");
            }
            let responseBody;
            const responseText = await response.text();

            try{
                responseBody = JSON.parse(responseText);
            }catch(e){
                responseBody = responseText;
            }
            result.responseBody = responseBody;
            return result;
        }
        let errorBody;
        const errorText = await response.text();

        try {
            errorBody = JSON.parse(errorText);
        } catch (e) {
            errorBody = errorText;
        }

        result.responseBody = errorBody;

        console.log(result);

        throw result;
    } catch (error) {
        return error;
    }
}