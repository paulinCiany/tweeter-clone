import BtnFolllow from "./Component/BtnFollow"
function ProfileUser() {
    return (
        <>
            <div className="imgAlign">
                <img src="src/assets/bgrd600x200.jpeg" alt="" className="bgrdProfil" />
                <div className="btnAndMore">
                    <img src="src/assets/avatar-ro_reasonably_small.gif" alt="" className="profilUser" />

                    <div className="moreAndfollow">
                        <img src="src/assets/Icons/More-2.svg" alt="" />
                        <BtnFolllow />
                    </div>
                </div>
            </div>

            <div className="userProfilname flexColumn">
                <span className="userNameStl">John Keller</span>
                <span>@johnkeller</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem dignissimos nihil maxime odio aspernatur et tenetur ab repudiandae incidunt dolores delectus quam perferendis amet commodi, iste in aperiam, doloribus voluptatibus!
                <div>

                  
                

                    
                </div>
                </p>
            </div>
        </>
    )
}




export default ProfileUser