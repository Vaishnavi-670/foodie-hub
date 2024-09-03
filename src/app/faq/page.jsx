'use client'
import { useState } from 'react';

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {

            question: "What are your restaurant's opening hours?",
            answer: "Our restaurant is open from 11 AM to 10 PM, Monday through Sunday."
        },
        {
            question: "Do you offer vegetarian options?",
            answer: "Yes, we have a wide range of vegetarian dishes available on our menu."
        },
        {
            question: "Can I make a reservation online?",
            answer: "Yes, you can make a reservation online through our website or by calling us directly."
        },
        {
            question: "Do you offer delivery services?",
            answer: "Yes, we offer delivery services through our website and popular food delivery platforms."
        },
        {
            question: "What is your policy on food allergies?",
            answer: "Please inform our staff of any food allergies when placing your order, and we will do our best to accommodate your needs."
        },
        {
            question: "Do you have gluten-free options?",
            answer: "Yes, we offer several gluten-free dishes. Please ask our staff for more details."
        },
        {
            question: "Is there parking available at your restaurant?",
            answer: "Yes, we provide complimentary parking for our guests."
        },
        {
            question: "Do you have a loyalty program?",
            answer: "Yes, we offer a loyalty program where you can earn points on every purchase and redeem them for"
        }
    ];

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h1>
                <div>
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 mb-4">
                            <button
                                onClick={() => toggleOpen(index)}
                                className="w-full flex justify-between items-center py-4 px-4 text-left text-gray-700 focus:outline-none"
                            >
                                <span className="text-lg font-medium">{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="py-4 px-4 text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
