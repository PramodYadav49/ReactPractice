import React from 'react'

const Profile = () => {
  return (
    <div>
        <ProfileCard
        name="alice"
        age={21}
        greeting={
            <div>
                <strong>Hello alice, keep up the great work!</strong>
            </div>
        }
        >
        <p>Hobbies: Reading, Hiking</p>
        <button>Contact</button>

        </ProfileCard>

        <ProfileCard
        name="Bob"
        age={21}
        greeting={
            <div>
                <strong>Hello Bob, keep up the great work!</strong>
            </div>
        }

        >
            <p>Hobbies: gaming,Cooking</p>
            <button>Contact</button>


        </ProfileCard>


    </div>
    
  )
}

export default Profile

function ProfileCard(props){

    const{name,age,greeting,children}=props;
   
    return(
            <>

            <h2>Name: {name}</h2>
            <p>age: {age}</p>
            <p>{greeting}</p>
            <p>{children}</p>
            </>



    )

}

