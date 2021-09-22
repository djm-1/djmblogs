import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="page-footer font-small stylish-color pt-4">
        <div class="container">
          <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
              <a class="btn-floating btn-li mx-1" href="https://www.linkedin.com/in/dibyajyoti-mondal-8632991a0/" target="_blank">
                <i class="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-gplus mx-1" href="https://www.quora.com/profile/Dibyajyoti-Mondal-5" target="_blank">
                <i class="fab fa-quora"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-fb mx-1" href="mailto: dibyajyoti.bhs@gmail.com" target="_blank">
                <i class="fas fa-envelope"> </i>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-git mx-1" href="https://github.com/djm-1" target="_blank">
                <i class="fab fa-github"> </i>
              </a>
            </li>
            
            <li class="list-inline-item">
              <a class="btn-floating btn-yt mx-1" href="https://www.youtube.com/channel/UCkhieeBPsDcuc1JRNwibUDw" target="_blank">
                <i class="fab fa-youtube"> </i>
              </a>
            </li>
          </ul>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2021 Copyright:
          <a href=""> Dibyajyoti Mondal</a>
        </div>
      </footer>
    </>
  );
}
