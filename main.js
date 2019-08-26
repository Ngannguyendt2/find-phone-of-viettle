function findPhone() {
    let regexp = /^([0]{1})+((3|8|9){1})+([2-9]{1})+([0-9]{6})/;
let arrPhone=["056876456","035453543","086848745","095876876"]
        for (let i=0;i<arrPhone.length;i++)
        {
            if(regexp.test(arrPhone[i]))
            {
                document.write(arrPhone[i]+": true <br>");
            }
            else {
                document.write(arrPhone[i]+": false <br>");
            }

        }
}
findPhone();
