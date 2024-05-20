
export interface PokemonDetail {
    sprites: {
      front_default: string;
      back_default: string;
    };
    stats: [
      {
        base_stat: number;
        effort: number;
        stat: {
          name: string;
          url: string;
        };
      }
    ];
    types: [
      {
        type: {
          name: string;
          url: string;
        };
      }
    ];
  }