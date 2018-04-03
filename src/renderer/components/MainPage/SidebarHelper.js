export default {
  activeLink: (link) => {
    // const routeName = this.$route.name
    console.log(link)
    const activeLink = document.getElementsByClassName('router-link-active')
    activeLink[0].parentElement.style.backgroundColor = '#34495e'
    activeLink[0].parentElement.style.color = '#95a5a6'
    document.getElementById('dashboard').style.backgroundColor = '#000'
  },
  mounted: () => {
    const activeLink = document.getElementsByClassName('router-link-active')
    activeLink[0].parentElement.style.backgroundColor = '#000'
    // activeLink[0].parentElement.style.color = '#95a5a6'
    activeLink[0].style.color = '#fff'
  }
}
