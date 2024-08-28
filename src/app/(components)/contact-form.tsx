"use client";

type Props = {};

const ContactForm: React.FC<Readonly<Props>> = () => {

  return (
    <form onSubmit={() => console.log("Form Submitting ...")}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-24">
        <div className="col-start-1 flex flex-col gap-2">
          <label htmlFor="full_name" className="text-slate-800">Full Name</label>
          <input
            id="full_name"
            name="full_name"
            type="text"
            autoComplete="off"
            className="rounded border border-slate-500 p-2 text-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-800"
          />
        </div>

        <div className="md:col-start-1 md:row-span-1 flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-800">Email</label>
          <input
            id="email"
            name="email"
            autoComplete="off"
            type="email"
            className="rounded border border-slate-500 p-2 text-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-800"
          />
        </div>

        <div className="md:col-start-1 md:row-span-1 flex flex-col gap-2">
          <label htmlFor="phone" className="text-slate-800">
            <span>Phone</span>{' '}
            <span className="text-sm text-slate-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            className="rounded border border-slate-500 p-2 text-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-800"
            type="phone"
            autoComplete="off"
          />
        </div>

        <div className="md:col-start-2 md:row-start-1 md:row-end-5 flex flex-col gap-2">
          <label htmlFor="email" className="text-slate-800">Message</label>
          <textarea
            id="phone"
            name="phone"
            autoComplete="off"
            className="rounded border border-slate-500 p-2 h-full text-slate-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-800 resize-none"
            rows={5}
          ></textarea>
        </div>
        <div className="md:col-start-2 md:row-start-5 text-right">
          <button
            className="bg-slate-800 hover:bg-slate-600 text-white w-1/2 rounded p-3 py-2 transition-color duration-300 uppercase"
          >send</button>
        </div>
      </div>
    </form>
  );

};

export default ContactForm;
