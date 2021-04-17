import * as ActionList from "./ActionsList";
import SEHAT from "../../api/SEHAT";
import { toast } from 'react-toastify';

const SUCCESS = (msg) => {
  return toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

const ERROR = (msg) => {
  return toast.error(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
};

export const IS_LOGGED_IN = () => ({
  type: ActionList.IS_LOGGED_IN,
});

export const IS_LOGGED_OUT = () => ({
  type: ActionList.IS_LOGGED_OUT,
});

export const TOKEN = (payload) => ({
  type: ActionList.USER_TOKEN,
  payload,
});

export const USER_STATUS_REGISTER = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.post("/auth/signup", data)
      .then((response) => {
        dispatch(USER(response.data));
        SUCCESS("Registration Successful");
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const USER_STATUS_LOGIN = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.post("/auth/login/", data)
      .then((response) => {
        SUCCESS("Login Successful");
        dispatch(USER(response.data));
        callback();
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
      });
  };
};

export const USER = (data) => {
  return async (dispatch) => {
    await window.localStorage.setItem("Token", JSON.stringify(data));
    dispatch(TOKEN(data));
    dispatch(IS_LOGGED_IN());
  };
};

export const USER_STATUS_IN = () => {
  return async (dispatch) => {
    const token = await window.localStorage.getItem("Token");
    if (token !== null) {
      dispatch(TOKEN(JSON.parse(token)));
      dispatch(IS_LOGGED_IN());
    }
  };
};

export const USER_STATUS_OUT = () => {
  return async (dispatch) => {
    dispatch(IS_LOGGED_OUT());
    await window.localStorage.removeItem("Token");
  };
};

export const INFORMATION = (payload) => ({
  type: ActionList.USER_INFORMATION,
  payload,
});

export const USER_INFORMATION = (type, id, callback) => {
  return async (dispatch) => {
    await SEHAT.get(`/user/${type}/${id}`)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
      });
  };
};

export const ADD_USER_INFORMATION = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.post("/information/add", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Information Updated Successful!");
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const USER_INFORMATION_UPDATE = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.put("/information/update", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Information Updated Successful!");
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const ADD_USER_MEDICAL_HISTORY = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.post("/medicalHistory/add", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Medical History Added Successful!");
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const USER_MEDICAL_HISTORY_UPDATE = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.put("/medicalHistory/update", data)
      .then((response) => {
        console.log(response.data);
        dispatch(INFORMATION(response.data));
        SUCCESS("Medical History Updated Successful!");
        callback();
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const ADD_USER_VITAL = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.post("/vitals/add/", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Vital Added Successful!");
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
      });
  };
};

export const USER_VITAL_UPDATE = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.put("/vitals/update/", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Vital Added Successful!");
        callback();
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const ADD_MEDICAL_STATUS = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.post("/medicineStatus/add", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Medical Status Added Successful!");
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
      });
  };
};

export const USER_MEDICAL_STATUS_UPDATE = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.put("/medicineStatus/update", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Medical Status Added Successful!");
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const USER_MEDICAL_STATUS_CHANGE = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.put("/medicineStatus/change", data)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        SUCCESS("Medical Status Delete Successful!");
        callback();
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const DOCTOR_VERIFICATION = (data, callback) => {
  return async (dispatch) => {
    await SEHAT.post("/admin/", data)
      .then((response) => {
        dispatch(USER(response.data));
        SUCCESS("Your Request is Approved!");
        callback();
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const GET_APPOINTMENT = (id, callback) => {
  return async (dispatch) => {
    await SEHAT.get(`/appointment/user/` + id)
      .then((response) => {
        dispatch(INFORMATION(response.data));
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};

export const CHAT = (payload) => ({
  type: ActionList.CHAT_LIST,
  payload,
});

export const GET_CHAT_LIST = (id, callback) => {
  return async (dispatch) => {
    await SEHAT.get(`/user/chatList/` + id)
      .then((response) => {
        dispatch(CHAT(response.data));
        callback();
      })
      .catch((error) => {
        if (error.response) {
          ERROR(error.response.data.error);
        } else if (error.request) {
          ERROR("Bad Request!");
        } else {
          ERROR("Network Error!");
        }
        callback();
      });
  };
};
