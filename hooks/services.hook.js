import tokenModel from "../config.json";
import querystring from "query-string";
import axios from "axios";
//context
import { storage } from "../common";
const useService = () => {
  return async (type, url, param, hashToken, title, apiMode = false) => {
    let headers = { "Content-Type": "application/json" };
    if (hashToken) {
      let data = storage.findItem("sanab_dashboard_token");
      let token = JSON.parse(data).token;
      headers["Authorization"] = `Bearer ${token}`;
    }
    let response = null;

    title && loading(true, title);
    switch (type) {
      case "get":
        let data;
        let getID = true;
        if (!param || !param.id) {
          data = querystring.stringify(param, {
            skipNull: true,
            skipEmptyString: true,
            arrayFormat: "bracket",
          });
          getID = false;
        }
        try {
          response = await axios.get(
            `${tokenModel.apiUrl}${url}${
              getID ? `/${param.id}` : data && `?${data}`
            }`,
            {
              headers: headers,
            }
          );
        } catch (error) {
          response = Object(error).response;
        }
        break;
      case "post":
        try {
          response = await axios.post(
            url === "login_check"
              ? `${tokenModel.loginUrl}${url}`
              : `${tokenModel.apiUrl}${url}`,
            param,
            {
              headers,
            }
          );
        } catch (error) {
          response = Object(error).response;
        }
        break;
      case "delete":
        try {
          response = await axios.delete(
            `${tokenModel.apiUrl}${url}/${param.id}`,
            {
              headers: headers,
            }
          );
        } catch (error) {
          response = Object(error).response;
        }
        break;
      case "put":
        try {
          response = await axios.put(
            param.id
              ? `${tokenModel.apiUrl}${url}/${param.id}`
              : `${tokenModel.apiUrl}${url}`,
            param,
            {
              headers: headers,
            }
          );
        } catch (error) {
          response = Object(error).response;
        }
        break;
      default:
        return null;
    }
    title && loading(false, null);
    if (response) {
      switch (response.status) {
        case 200:
          return response.data;
        case 201:
          return response && response.data;
        case 204:
          return { success: true };
        case 400:

          response && message.warning(response.data["hydra:description"]);
          return null;
        case 401:
          localStorage.removeItem(tokenModel.tokenKey);
          response
            ? message.warning(response.data["hydra:description"])
            : message.error("مشکل در حساب کاربری لطفا مجددا وارد شوید");
          return null;
        case 404:
          message.error("این درخواست برای سرور تعریف نشده");
          return null;
        case 403:
          message.error("حساب کاربری شما مجوز این عمل را ندارد");
          return null;
        case 422:
          response && message.error(response.data["hydra:description"]);
          return null;
        case 405:
          message.error("حساب کاربری شما مجوز این عمل را ندارد");
          return null;
        case 500:
          if (response.data && response.data["hydra:description"]) {
            message.error(response.data["hydra:description"]);
          } else {
            message.error("خطای ناشناخته");
          }
          return null;
        default:
          message.error("خطای تعریف نشده");
          return null;
      }
    } else {
      message.error("خطای تعریف نشده");
      return null;
    }
  };
};
export default useService;
