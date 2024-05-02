// 이메일 형식 유효성을 검사하는 함수
function isEmailValid(email) {
    // 이메일 유효성을 검사하기 위한 정규 표현식
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // ex) user@example.com
    // 입력된 이메일이 정규 표현식과 일치하는지 검사
    return emailRegex.test(email);
}

// 비밀번호 형식 유효성을 검사하는 함수
function isPasswordValid(password) {
    // 비밀번호 유효성을 검사하기 위한 정규 표현식
    // 최소 8자, 최소 하나의 소문자, 대문자, 숫자, 특수문자 포함
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    // ex) Valid123!
    // 입력된 비밀번호가 정규 표현식과 일치하는지 검사
    return passwordRegex.test(password);
}

// 이메일과 비밀번호의 유효성을 검사
function validateCredentials(email, password) {
    // 이메일과 비밀번호가 모두 유효할 경우에만 true를 반환
    return isEmailValid(email) && isPasswordValid(password);
}

console.log(validateCredentials("example@test.com", "Test1234!"));
console.log(validateCredentials("exampletest.com", "test1234"));
