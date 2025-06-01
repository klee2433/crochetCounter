import RowCounter from './RowCounter';
import StitchCounter from './StitchCounter';

function Project() {
    return (
        <div class="Project">
            <h2>
                Crochet Project Title
            </h2>
            <div class="Counters">
                <RowCounter />
                <StitchCounter />
            </div>
            <textarea id="notes" name="notes" rows="4" cols="50">
                Notes
            </textarea>
        </div>
    );
}

export default Project;