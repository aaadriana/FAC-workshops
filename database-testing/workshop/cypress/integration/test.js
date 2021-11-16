beforeEach(() => {
  cy.task('resetDb');
});

describe('list books', () => {
  it('displays a list of books', () => {
    cy.visit('/');
    cy.contains('Log In').click();
    cy.url().should('include', '/log-in');
    cy.contains('Sign Up').click();
    cy.url().should('include', '/sign-up');
  });
});

describe('add a new book', () => {
  it('can add a new book', () => {
    cy.visit('/');
    cy.contains('Add a book').click();
    cy.url().should('include', '/books/add');
    cy.get("input[name='username'").type('Adriana');
    cy.get("input[name='user_email'").type('adriana@ex.uk');
    cy.get("input[name='book_name'").type('he Recruit');
    cy.get("input[name='author'").type('Robert Muchamore');
    cy.get("input[name='desc'").type('Spy Kids the book');
    cy.get("input[name='genre'").type('Spy fiction');
    cy.get("button[type='submit']").click();
    cy.contains('Adriana');
  });
});

describe('delete book', () => {
  it('can delete a book', () => {
    cy.visit('/');
    cy.get("button[aria-label='Delete Sery1976'").click();
    cy.contains('Sery1976').should('not.exist');
  });
});
