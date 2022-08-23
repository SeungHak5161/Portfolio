import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// component
import Layout from "../components/layout";
// library
import { getReleaseData } from "../lib/posts";

export default function releases({ allReleasesData }) {
  return (
    <Layout>
      {allReleasesData.image.map((image) => (
        <div>
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
      ))}
      {console.log(allReleasesData)}
    </Layout>
  );
}

export async function getStaticProps() {
  const allReleasesData = getReleaseData();
  return {
    props: {
      allReleasesData,
    },
  };
}
