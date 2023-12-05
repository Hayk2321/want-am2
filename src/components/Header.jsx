import "../css/Header.css"
function Header() {
    return (
        <>
            <div className="header">
                <button id="name">AM</button>
                <p id="name2">ԱՌԱՔՈՒՄ ԵՒ ՎՃԱՐՈՒՄ</p>
                <p id="name3"> ԿՈՆՏԱԿՏՆԵՐ</p>
                <img id="logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGCBITExESEhMTEhcSGBMYGxMRERcaFxESGBcaGhcXGBkcICsjGiApHxkXJDokKiwxMzIyHCE3PDkxOysxMi4BCwsLDw4PHRERHTEoIygxMTEyMjMxMTExMzExMTExMTExMTExMTExMzExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQIDBAYHAf/EAEQQAAIBAwIDBQMHCQUJAAAAAAABAgMREgQhBQYxEyJBUWEycYEHFCRCkbLRFiM0UlNyk7HBRHOh4fAVQ2JjgpKis9L/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAUG/8QALxEBAAEDAgQEBAYDAAAAAAAAAAECAxEEIRIxQVETYXGhBRQi0UKBkbHB8AYyM//aAAwDAQACEQMRAD8A7MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDc36+Wn0tarD2koqLte0pyUU/he5MGNr9LCrCVOpHKE1Zx818OnvIq3iYhktTTTcpqrjMRMZjvHVzvhHCOI16MdXR1cnKbk8HXqJ7Saxb3Xh06ElwDmutCqtJr4uM7qKqWSd27RzXRp/rL/Mq1PICTboampBN9Jq/wALxav8SvhfIVOE4VKtaVTFxeMY2UnF3WTbbaujVppuUzGI99nfvanRXaavFqiY34Yiiaaqe28bY9cs7j/MUo1Hp9NHOpfFyte0v1Yrxfq9kRur4VrownXq6lxcE5Y9tO+29rrup+iJrjHK9GtOVSMpU5yd247xk/Np9H7miO/IyTay1Da8sHf4Xkdy1dsU0xwzjvmmZmfzeZnPVMco66dbTxlN3lGUoOX61uj99miaMThuihQpxpw2jHxfWTe7b9WzKNG5VTVXM07RleIl6ACgAAAAAAAAAAAAAAAAAAAAAAAAAADn3OFaa1VRKUkrR2Uml7K8i1y9Xm5Vryk/zFZ7ybs1HZ9TZOM8txr1JVXUcMlFWUE+it1uU8O5YjTlN9o5Z05wtglZTVr9TpxqLXgxT1xHRxY0t/5rxPw8WeccvRovzur+0qfxJfidC5Km5aWm5Nyd6m7bb9t+LI38iKf7af8A2RJ/gnD1p6UaSk5qLk7tWe7uRrdRauUYo79nXpiWjfKzXnCrpsJuN4S6N795eRr3KmqqS1mmTqTadSns5tp97yudG5q5XhrZ05SqOGEZRsop3u0/H3EfwvkSnRq0q0a05OnKLthFJ28Dg12q5ucUcnqNL8R0tvRRZqn6uGqOU85z1/Nrus1E+0n3pe1L60v1n6m1/J/NuFa7b3h1bfg/M9qcnwlKUu1l3m37K8XclOA8IjplNRm5ZtPdJWsvQ72o1Fqu1w089ujwOk0l+3fiuvlv1SoIXmfi89LGnONNVFNuLbnji7XXg733+wucG4vGvQddrDHLKN74uKu99vCzNHwq+DxMbcnZ8ksDUOH849pVhTlSUIzko5dpdxvsrrHzsSXM3HfmvZxUFUlO7s5YqMV49H/pF5012K4omN59EZjGU6DXqnMKhpqeoqU7Sq3xpxle9m98mtlbfp4kWubq8k5R0ycV1azaXvklYmnSXas4jy5wcUN1BAcu8xw1LcHHs5pXxyupJdbOy39DH5g5nlp6rpKkp2UXk6jV7q/TFlY092a+DG5mGzg03V84yu3So3gvrzb/AJJWX2kty5x+Gqyi44TiruN7prpdO3+tia9Ndop4qo2MwydTxzT06jpTqJSTSaxls3a26VvFEmcz5plbW1X5Tg/sjFm38F5kpaip2cYTi8XK8sbWVvJ+plu6WabdNdOZjGZ8uSInfCdAILmPj8NM4wwdSclljeyUbtJt2fk9reBrUUVV1cNMZlbOE6DSvyurpKb06wf1u+k/+q1if4BxmnqotxTjKFsot3tfo0/Fepkuaa7bjiqjb1yiJylgajqOb8K06cqSwhOUXJTblaLauo29OlyxPnSakn83Sg+l5NScfNO1i0aO/P4feDihuoNV1/N8EoqhTlVlJXad0oejsm2/dt6nvAualWqRp1aapue0ZRleLl5NPoV+VvcPFNP3/QzDaQeAwJQ3OdRw0eolFyjJQ2cW013l0a3RyelxrVXX0mt7S/38/P3nXuZlF6aspxc4uO8VJxct1tkuhzyFHRXX0WfVf2l//JSrR3r85t8o25unofjOh0FE29TE5mcxinO2Mfu6rDovciopj0RUXcwIfm6pKOlqyjJxawtKLaa78ejRMETzTKC01RzhnHuXjk437y8V0Mlr/pT6x+6tdUU0zMuf6bX13Up3rVX3odas+mS9TqpzbT6jS5wtpGneNn84ns7q3gdJNz4hMTNOIx+n8MOnv27sTNE5x6ovmjSdrpqkUrySyj+9Hf8Ax3XxNC4fxJ09PqKKv+eULem/f+2J1I5zruV9Sq040qd6bk8Z5wsoN7Xu77e7wJ0Vyjhmi5O2Yn9P7DNVE9EfqNBOnRo1+nayml/wuL7r+NpP4F7i+rlq68LdZqlTivJtLL/ycjdONcIz0ioU0nKlGGF9rygrdfVXXxIPlPgFaFeNStDCNNNq8ovKbVlsm+l2/sM9Groqom5V/tGcfnyRNPRm81a2jQhRoujCtKMViqivGEV3U/jZ7ehhaPinEMI9lpoKnbuqFFqOPosuhn848CqV5QrUrSlGOLg2llFNtNN7X3fUwdLLiyhGlGGCilFTkoXUVsu83/S5gtxbmzTjhmevFP7R9kznKJ5WbWso7Wec00vDuyui9z5+lVP3af3TL4FwLU09VTnUp92E5N1M4tPuyV+t92/Iuc3cF1FbUSnSpOcXGCyUoLdKz6tGz4tv5mKuKMcPPPmricNspaeCo9moxUMLYpbWcd9jRORX9Lh6xqfZj/kdCUXhbxxt8bGmcp8F1NLUQqVabhGMZpycoPdqy6Ns0tNciLV2Kp5x91p5wjOZ19Oqfv0/uwOhUdJSg7wp04PpeEIp28rpGq838ArTqutRjnmllFNKSkla6u91ZIv8Gr8SdSlGrBqmnacpRgm42e7d736dC97F2zRNNUbRvEzjpH2I2ltZpnNvF6Sq9nHT0q1SKSc6sMreKil49fPxLdLQcR+dKb7XDtbuXbLDs8rvu5dMdrWK+aOX6zrS1FBZ5NScU0pRmrbq+zWyYs27Vu5HHVE5jv17TgnMwta7X8RlSqRqUEqbg1L801jC279rayLfydP8/UX/ACpffh+JkzXFa8XSlFU4tNSk1GOS8U929/Qr5K4TXo1pyq03CLpuKblF3blF22b8mZaqqKbFdP0xPamf77I6oVQUuIOMkmnqJJp9Gu0ezNn+UGC+bRdt41I29LppkVS4LqVru1dN9n28p55Qthm5Xte/T0J7nHSVK2nwpRylnF2TS2V79WvMrduUeNanPKIzvyIjaWB8nVKPY1J2WTqY5W3xUYtK/lds1/ikVHXyx2tWg9vBuUW/8Wza+StFVo0ZxqwcG6jkk2n3cYq+zfkyF4pwXUz1jqxpNwdWEssoWxWN31v4MWrlHzFyZmMTHf0JjaG9A8uDkrozmOF9NWV4wvH2pyUYx3W7k9kaHHQxuvpOk6r+10/xN154/QdV+5/VHGqTeS69V4+pb5+5p/poxvvu6Gj/AMdsfE6ZuXKqomJxtjtn+XcpcRoJ2lWpprZp1Ipp+quXtLqIVE5U5xmk7XhJNJ9bXXvRzfmBr5xW38f6I2z5P/0ef95L7sTeu6WKLMXMz093ndPrpu35tYjbPtKY1Ovo03jUqwg2r2lJJ287P3MjOYNVRraarGFaj9R5SqRUV342yfh5EF8oD+kQ/u4/ekQia+a67f6tL/2xE2It2PHid4jPlzXtX/mNbGiqjaqrhz1xPsydNo45w+k6R7x2Wpi21ddF5nTTgegk+0p/vQ/mjviNGNZXqd68bdnc1nwW18LmKbUzPF38tnpiQ1kJPFZPdxyUJuN1s1la3W6uZZH6OnVp2hjCUFKXfzali5N7xx6q9uu5bbDSZGo1MYY5X7zslGEpNuzfSKfgmxp9RGabi33XZpxcXF2Ts01dbNP4ota7TOpKi7tKE3J2k07OnOKs16yQ4dpnBSi3leTebbcpJpWc7/WXT3JdOgxHD5ir57DJxWTcXi8aU2lLbbJK3ii/VqKMXKTsoptt+CXVmBQ0s4TnNRi85uSfbTVk0l7GNm9mX9fQlUUYqWKyTk1a9o7pK6a9pR6+FyZinO3IXdPWjOKlHdO/VNO6dmmnummmrFqOug5YWqZbbOlUVk20m3jZLZ7nmh08qcqiyyjN5LK2Sm/aWyStsn72y5Gk+1lPazhCPrdSk3/NEfTmRcqVYxcU3ZzbS9WouX8kymVaKlGLdnLK3rbrv5+nv8ijVUXKdGStanNyd/FOnOO3xkjziFFyisbZQalG+yyXg35NXT9GRERsL1OrGTkk74Oz9HZO32NFiOtg5OKzdpON1Sm0pJ2fetbqV6GjhBRbu93J/rTk7yf2tmLptNOEpPGLynOWXbTVoyk37GNrpMtHDuMjiGup0IqVSWKbSXVuUn4JLdnug1lOtFypttJ270JRd7J9JJPxRh8w6CVaEIxjTk4yUvzkpxx2e8XDe/Q95c0dWjTcKtTtG5NrvSkoxaVoqUt30b+Jbho8POfq7I6qZcw6VPF1HdeHZ1L/AHTO1mrhSg6lSShFWu369F6sw5aGb1cdReOCpOnbfLLJu/lY95i4c9RRwjJRkpRkm+l4+D9CZi1xUxEzEdeuPY3V6Di1GtJwpzvJK+MoSi7eaUkroq1/E6NFxjUli53aShKV0uvspmFoeH1nqPnFd0k403TUaOVnd3u3L4nvGuEzrVaM4zdNU41E5Qk1NOS2cdvMnhtRXjO2PXfHLOO/kbpHQaynWhnTkpq7V0mrNdU090Yr43p1J0+0eUZYNKnN2le1rqNjzlzQToUuznhdSk8qd+9f60r+JHUeDV4V6lWLpNTqymsqlVWi29nGNot2fjcmmi1xVRM7Ry5bm7ZQAa+6cKKtNSTUkpJ9U1dP4Fj/AGfQ/Y0v4cfwMsEpzMcliWng93GLfm4orhTjHaKUfcki4AriFmdGMt3GLfm0mU/Nae6whZ9Vit/eZABhirRUf2VP+HH8DJR6AkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=" alt="logo" />
                <hr />
                
            </div>
            <ul>
                <li>ԲՈԼՈՐ ՆՎԵՐՆԵՐԸ</li>
                <li>ՀՈԲԲԻ</li>
                <li>ՍԵՂԱՆԻ ԽԱՂԵՐ</li>
                <li>ՕՊՏԻԿԱ</li>
                <li>ԿԱՆԱՆՑ ԹՈՓ 50</li>
                <li>ՏՂԱՄԱՐԴԿԱՆՑ ԹՈՓ 50</li>
                <li>ԳՐԱՍԵՆՅԱԿԱՅԻՆ</li>
            </ul>
        </>
    )
}
export default Header