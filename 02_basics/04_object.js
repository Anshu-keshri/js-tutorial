const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="anshu"
console.log(tinderUser)

const regularUser={
    email:"anshu@gmail.com",
    fullName:{
        userFullName:{
            firstName:"anshu",
            lastName:"kumar"
        }
    }
}

console.log(regularUser)
console.log(regularUser.fullName.userFullName)
console.log(regularUser.fullName.userFullName.firstName)

obj1={
    a:1,
    b:2
}

obj2={
    c:1,
    d:2
}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

// best way to concat two object.....

const obj4={...obj1,...obj2} // just like array.....for multiple concatination simultaneously.....
console.log(obj4)