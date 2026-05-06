const greet = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("XO To UR Lif3"));

function formatData(data: string|number){
    if (typeof data === "string") {
        return data.toUpperCase();
    } else {
        return data.toFixed(2);
    }
}

function toUserPreview(user: User){
    return{
        id: user.id,
        name: user.name
    }
}

interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // Optional property
    value: number;
}

type UserWithoutEmail = Omit<User, 'email'>;
type UserAndName = Pick<User, "id" |"name">;
type age = Partial<User>;

const user1: User = {
    id: 1,
    name: "John Doe",
    email: "xxxxx.com",
    age: 30,
    value: 100
};

const user2: UserAndName={
    id: 1,
    name: "John Doe"
}

 // this cant be used, we should restructure if we want to use it directly
const userPreview: UserAndName = toUserPreview(user1)

console.log(formatData(user1.name))
console.log(formatData(user1.value))
console.log(user1)
console.log(userPreview)


