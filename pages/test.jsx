// test.jsx

export default function Test(props) {
  console.log('test.js:', props)
  return <h1>Test</h1>
}

export async function getStaticProps() {
  return {
    props: {
      message: 'データの流れ',
    },
  }
}
