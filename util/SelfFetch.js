import fetch from "node-fetch";

class SelfFetch {

  // 让每个promise请求都trycatch
  async baseMethod(fn) {
    if (fn) {
      try {
        const res = await fn;
        const data = await res.json();
        if (data) {
          return data;
        } else {
          return '';
        }
      } catch (error) {
        return null;
      }
    }
  }

  async get(url) {
    // const token = window.localStorage.getItem('token') || ''
    return await fetch(url, {
      headers: {
        // Authorization: `Bearer ${token}`, // 带上token的地方
        'Content-Type': 'application/json'
      },
    })
  }

  async post(url, options) {
    //  const token = window.localStorage.getItem('token') || ''
    const res = await fetch(url, {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(options),
    })
    return res;
  }

  async put(url, options) {
    // const token = window.localStorage.getItem('token') || ''
    const res = await fetch(url, {
      headers: {
        //  Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      method: "Put",
      body: JSON.stringify(options),
    })
    return res;
  }
}

export default SelfFetch;
