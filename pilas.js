class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

const bookStack = new Stack();

const book1 = {
  title: "Clean Code: A Handbook of Agile Software Craftsmanship",
  author: "Robert C. Martin",
  genre: "Programming",
  year: 2008
};

const book2 = {
  title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
  author: "Eric Ries",
  genre: "Business",
  year: 2011
};

const book3 = {
  title: "Sapiens: A Brief History of Humankind",
  author: "Yuval Noah Harari",
  genre: "History",
  year: 2011
};

const book4 = {
  title: "The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life",
  author: "Mark Manson",
  genre: "Self-Help",
  year: 2016
};

const book5 = {
  title: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
  author: "James Clear",
  genre: "Self-Help",
  year: 2018
};

bookStack.push(book1);
bookStack.push(book2);
bookStack.push(book3);
bookStack.push(book4);
bookStack.push(book5);

bookStack.print()