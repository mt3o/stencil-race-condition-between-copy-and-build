
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-n7a4ihuwat',
  shadow: true,
})
export class Cn7a4ihuwat {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  