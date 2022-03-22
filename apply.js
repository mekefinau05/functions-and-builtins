function introduction(name, profession) {
    console.log('My name is ' + name + ' and I am a ' + profession + '.')
    // console.log(this)
}

introduction('John', 'student')
introduction.apply(undefined, ['Mary', 'lawyer'])
introduction.call(undefined, 'John', 'student')
