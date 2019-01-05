import React from 'react'

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="row">
        <div className="col-md-6 text-right">
          Copyright &copy; {new Date().getFullYear()}
          HackerHub
      </div>
        <div className="col-md-6">
          <a
            className="text-white"
            rel="noopener noreferrer"
            target="_blank" id="footer-link-github" href="https://github.com"
          >
            <i class="fab fa-github white-text mr-4" />
          </a>

          <a
            className="text-white"
            rel="noopener noreferrer"
            target="_blank" id="footer-link-twitter" href="https://twitter.com"
          >
            <i class="fab fa-twitter white-text mr-4" />
          </a>

          <a
            className="text-white"
            rel="noopener noreferrer"
            target="_blank" id="footer-link-facebook" href="https://facebook.com"
          >
            <i class="fab fa-facebook-f white-text mr-4" />
          </a>
          <a
            className="text-white"
            rel="noopener noreferrer"
            target="_blank" id="footer-link-linkedin" href="https://linkedin.com"
          >
            <i class="fab fa-linkedin white-text mr-4" />
          </a>
        </div>
      </div>

    </footer>
  )
}