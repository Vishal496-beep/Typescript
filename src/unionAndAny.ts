let subs:number | string = 1 //&& '1M' its called union now it can accept both values

let apiRequests : 'Pending' | 'success' | 'error' = 'success'

apiRequests = 'Pending'  //we can only access between pending success and error otherwise whatever the string we use it will give error 