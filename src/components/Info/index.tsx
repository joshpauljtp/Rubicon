import Layout from "../core/Layout";
import styles from "./styles.module.css";

function Info() {
  return (
    <Layout>
      <section>
        <h2>What is it?</h2>
        <p>
          Rubicon is a WIP, experimental project to create a custom instrument
          cluster interace for my motorcycle, and by extension, other
          motorcycles from the same family of products.
        </p>
      </section>
      <section>
        <h2>How does it work?</h2>
        <p>Rubicon is composed of an IoT / Hardware layer and a UI layer:</p>

        <section className={styles.card + " noBorder " + styles.dualGrid}>
          <section>
            <h3>The Hardware Layer</h3>
            <p>
              <strong>Copper wires</strong> connect to the bike's data socket
              (available after removing the stock instrument cluster). Majority
              of the signals are 12V. These are stepped-down to 3.3V, via{" "}
              <strong>Buck Converters</strong>. These in turn, are connected to
              an <strong>ESP32</strong> microcontroller. The ESP32 runs Arduino
              code to read these signals and sends them to the UI layer via{" "}
              <strong>Websocket</strong>.
            </p>
          </section>
          <section>
            <h3>The UI Layer</h3>
            <p>
              A <strong>web</strong> interface created with{" "}
              <strong>React</strong> to subscribe to the data sent by the ESP32
              microcontroller and display it through the custom cluster UIs. As
              of the current implementation, the UI is displayed on an{" "}
              <strong>smartphone</strong>. The web interface is accessed via the
              browser of the phone. The custom cluster UIs can be created with
              any web technology (eg: CSS, Rive files, WebGL, etc), allowing for
              freedom of customization.
            </p>
          </section>
        </section>
      </section>

      <section>
        <h2>What's the state of things?</h2>
        <p>
          I'd say the UI layer is pretty much done from the POC perspective. The
          H/W layer is still being worked on, where I'm currently trying to:
        </p>
        <ul>
          <li>
            read the RPM signal, which is a PWM signal that I'm struggling to
            read.
          </li>
          <li>find out which pin provides the speed and neutral signals.</li>
          <li>create a more robust enclosure for the circuitry.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>

        <h3>Why a smartphone for the display? Why not a standalone display?</h3>
        <p>
          As this is still a POC, and I had my old smartphone handy, I chose to
          proceed with it as the display in the interest of cost and ease of
          rapid prototyping. Smartphones also provide a plethora of sensors
          withing them which can enhance the UX of Rubicon, unlocking new
          potential such as lean angle with the gyroscope, location services,
          etc.
        </p>

        <h3>Why not just use OBD?</h3>
        <p>
          Unfortunately for me, my bike doesn't support OBD. Honestly that was
          my first approach as well. As I do not have experience with the
          protocol, I'm unsure of the unique challenges I would have faced if my
          bike did support it. This doesn't close the door on OBD support
          however. In fact, perhaps OBD support could provide even finer details
          and data points which could be benefitial. However, as stated earlier,
          I have no requirement to support it.
        </p>

        <h3>Why not use X, Y or Z components instead?</h3>
        <p>
          Be it for the H/W or UI layers, each of these components were chosen
          for the sake of rapid prototyping or my experience with them. I have
          no experience with IoT or electric circuit design, so I needed to fill
          the gaps on my own to make something that works.
        </p>
      </section>
    </Layout>
  );
}

export default Info;
