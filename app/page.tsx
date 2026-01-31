import React from 'react';
import { getArticles } from '../lib/articles';

// Components imports
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkDelivery from '../components/WorkDelivery';
import Hero from '../components/Hero';
import Insights from '../components/Insights';
import StatsStrip from '../components/StatsStrip';
import Services from '../components/Services';
import About from '../components/About';
import Vision from '../components/Vision';
import Ventures from '../components/Ventures';
import Milestones from '../components/Milestones';
import Contact from '../components/Contact';
import BookingCTA from '../components/BookingCTA';

export default async function Home() {
    const allArticles = await getArticles();
    const recentPosts = allArticles.slice(0, 6);

    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <StatsStrip />
            <Services />
            <About />
            <Vision />
            <Ventures />
            <BookingCTA />
            <WorkDelivery />
            <Milestones />
            <Insights posts={recentPosts} />
            <Contact />
            <Footer />
        </div>
    );
}
