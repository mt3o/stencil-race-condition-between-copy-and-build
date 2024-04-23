
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-g9ehgvurfl',
  shadow: true,
})
export class Cg9ehgvurfl {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  