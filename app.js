
let age = 24;
let is_subscribed = true;
let user_points = 120;

// Check the user's age and subscription status
if (age < 18 && !is_subscribed) {
    console.log("The user is younger than 18 and is not subscribed.");
}
else if (age >= 18 && !is_subscribed) {
    console.log("The user is 18 or older and is not subscribed.");
}
else if (age < 18 && is_subscribed) {
    console.log("The user is younger than 18 and is subscribed.");
}
else {
    console.log("The user is 18 or older and is subscribed.");
}

// BONUS: Check eligibility for a special reward
if ((is_subscribed && age > 18) || user_points >= 100) {
    console.log("Congratulations! You qualify for a special reward!");
}
