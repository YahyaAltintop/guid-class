
class Guid {

    static Empty = "00000000-0000-0000-0000-000000000000";

    static NewGuid() {

        let guid = Array.from(Date.now() + String(Math.round(Math.random() * (999 - 100) + 100))).map((x, i) => {

            return (x + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(~~(Math.random() * 52)) +
                (i == 3 || i == 5 || i == 7 || i == 9 ? "-" : "")
            )

        }).join("");

        return guid;
    }

}
