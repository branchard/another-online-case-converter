import sample from 'lodash/sample';

export default class Utils {
    private constructor(){}

    private static readonly gradientColors: [string, string][] = [
        // ['#fc00ff', '#00dbde'],
        ['#524ad0 10%', '#D099FA'],
        // ['#7b4397', '#dc2430'],
        ['#43cea2', '#185a9d'],
        ['#9d50bb', '#6e48aa'],
        // ['#5c258d', '#4389a2']
    ];

    private static readonly gradientOrientations: string[] = [
        // 'to right',
        'to top right',
        // 'to left',
        // 'to top left'
    ];

    public static getRandomGradient(): string {
        // linear-gradient(to top right, #524ad0 10%, #D099FA)
        // linear-gradient(to left, #524ad0 10%, #D099FA)
        const colors = <[string, string]>sample(this.gradientColors);
        return `linear-gradient(${sample(this.gradientOrientations)}, ${colors[0]}, ${colors[1]})`;
    }
}
