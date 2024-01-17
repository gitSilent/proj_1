import { useEffect } from "react";
import { CookieNotification } from "./Notifications";
import { Store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'
import 'animate.css';

export default function WeUseCookie() {
  useEffect(() => {
    let inspiraUseCookie = document.cookie.replace(/(?:(?:^|.*;\s*)inspiraUseCookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    if (inspiraUseCookie === "") {
      Store.addNotification({
        type: "info",
        content: <CookieNotification />,
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__bounceIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 0,
          onScreen: false,
          touch: false,
        },
      });

      let date = new Date;
      date.setMinutes(date.getMinutes() + 10080);
      let newDate = date.toUTCString()

      let newCookie = `inspiraUseCookie=true; expires=${newDate}`
      document.cookie = newCookie;

    }
  }, []);

  return (
    <div>
    </div>
  );
}
